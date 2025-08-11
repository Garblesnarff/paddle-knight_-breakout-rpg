import { PERFORMANCE_BUDGETS } from '@/src/config/performance.config';

export class GameLogger {
  private static contexts: string[] = [];
  private static performanceMarks: Map<string, number> = new Map();

  static enterContext(name: string): void {
    this.contexts.push(name);
    // eslint-disable-next-line no-console
    console.group(`🎮 [${name}]`);
    this.performanceMarks.set(name, performance.now());
  }

  static exitContext(): void {
    const context = this.contexts.pop();
    if (context && this.performanceMarks.has(context)) {
      const duration = performance.now() - (this.performanceMarks.get(context) ?? performance.now());
      // eslint-disable-next-line no-console
      console.log(`⏱️ ${context} took ${duration.toFixed(2)}ms`);
      this.performanceMarks.delete(context);
    }
    // eslint-disable-next-line no-console
    console.groupEnd();
  }

  static debug(message: string, data?: unknown): void {
    // eslint-disable-next-line no-console
    console.log(`🔍 [${this.getCurrentContext()}] ${message}`, data);
  }

  static warn(message: string, data?: unknown): void {
    // eslint-disable-next-line no-console
    console.warn(`⚠️ [${this.getCurrentContext()}] ${message}`, data);
  }

  static error(message: string, error?: unknown): void {
    // eslint-disable-next-line no-console
    console.error(`❌ [${this.getCurrentContext()}] ${message}`, error);
  }

  static performance(metric: string, valueMs: number): void {
    const budget = PERFORMANCE_BUDGETS[metric];
    if (typeof budget === 'number' && valueMs > budget) {
      this.warn(`Performance budget exceeded for ${metric}: ${valueMs.toFixed(2)}ms (budget ${budget}ms)`);
    }
  }

  private static getCurrentContext(): string {
    return this.contexts.join('/') || 'Global';
  }
}


