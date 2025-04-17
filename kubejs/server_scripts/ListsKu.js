// ListsKuオブジェクトを定義
var ListsKu = {
    /**
     * 重み付けランダム選択
     * @param {Array<{ weight: number, entry: any }>} items - 重みとエントリの配列
     * @return {any} - 選ばれたエントリ
     */
    getEntryBasedOnWeight: function(items) {
        var totalWeight = 0;

        // 合計重みを計算
        for (var i = 0; i < items.length; i++) {
            if (typeof items[i].weight !== "number") {
                throw new Error("Invalid weight value for entry \"" + items[i].entry + "\": must be a number.");
            }
            totalWeight += items[i].weight;
        }

        // 重み付けランダム選択
        var r = Math.random() * totalWeight;
        for (var i = 0; i < items.length; i++) {
            r -= items[i].weight;
            if (r <= 0) {
                return items[i].entry;
            }
        }

        // フォールバック（実行されるべきではない）
        return items[items.length - 1].entry;
    }
};