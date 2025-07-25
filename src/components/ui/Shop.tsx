import React from 'react';
import { SHOP_ITEMS } from '../game/shop-items';
import SaveManager from '../services/SaveManager';

interface ShopProps {
    onClose: () => void;
}

export const Shop: React.FC<ShopProps> = ({ onClose }) => {
    const [gold, setGold] = React.useState(0);
    const [purchasedItems, setPurchasedItems] = React.useState<Record<string, number>>({});

    React.useEffect(() => {
        const save = SaveManager.load();
        setGold(save.player.gold);
        setPurchasedItems(save.player.unlockedSkills || {});
    }, []);

    const handlePurchase = (itemId: string) => {
        const item = SHOP_ITEMS.find(i => i.id === itemId);
        if (!item) return;

        const currentLevel = purchasedItems[itemId] || 0;
        const cost = item.cost * (currentLevel + 1); // Prices increase

        if (gold >= cost && currentLevel < item.maxLevel) {
            // Deduct gold
            SaveManager.addGold(-cost);
            setGold(gold - cost);

            // Update purchased items
            const newPurchases = { ...purchasedItems, [itemId]: currentLevel + 1 };
            setPurchasedItems(newPurchases);

            // Save to storage
            const save = SaveManager.load();
            save.player.unlockedSkills = newPurchases;
            SaveManager.save(save);
        }
    };

    return (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-gray-800 border-4 border-yellow-500 rounded-xl p-8 w-[800px] max-h-[600px] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-medieval text-yellow-300">The Armory</h1>
                    <div className="text-2xl text-yellow-400">Gold: {gold}</div>
                </div>

                <div className="grid gap-4">
                    {SHOP_ITEMS.map(item => {
                        const level = purchasedItems[item.id] || 0;
                        const cost = item.cost * (level + 1);
                        const isMaxed = level >= item.maxLevel;
                        const canAfford = gold >= cost;

                        return (
                            <div key={item.id} className="bg-gray-700 rounded-lg p-4 flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                    <p className="text-sm text-gray-500">Level {level}/{item.maxLevel}</p>
                                </div>
                                
                                <button
                                    onClick={() => handlePurchase(item.id)}
                                    disabled={isMaxed || !canAfford}
                                    className={`px-6 py-2 rounded font-bold ${
                                        isMaxed 
                                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                            : canAfford
                                                ? 'bg-yellow-600 hover:bg-yellow-500 text-white'
                                                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                    }`}
                                >
                                    {isMaxed ? 'Maxed' : `Buy (${cost} gold)`}
                                </button>
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2 bg-red-700 hover:bg-red-600 rounded text-white font-bold"
                >
                    Close
                </button>
            </div>
        </div>
    );
};