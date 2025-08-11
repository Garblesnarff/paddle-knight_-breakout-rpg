type MetricRecord = {
  metric: string;
  valueMs: number;
  at: number;
};

class PerformanceMonitorImpl {
  private records: MetricRecord[] = [];

  record(metric: string, valueMs: number): void {
    this.records.push({ metric, valueMs, at: performance.now() });
    if (this.records.length > 5000) {
      this.records.splice(0, 1000);
    }
  }

  getRecent(metric?: string, limit = 50): MetricRecord[] {
    const filtered = metric ? this.records.filter((r) => r.metric === metric) : this.records;
    return filtered.slice(-limit);
  }

  show(metric?: string): void {
    const recent = this.getRecent(metric, 20);
    // eslint-disable-next-line no-console
    console.table(recent);
  }
}

export const PerformanceMonitor = new PerformanceMonitorImpl();


