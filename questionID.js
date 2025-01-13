// questionIDと問題番号のマッピング
const questionMapping = {
    '000001': 1,
    '000002': 2,
    // 他のマッピングも追加
};

// クイズの正解情報をローカルストレージに保存する関数
function saveQuizResult(questionId, isCorrect) {
    localStorage.setItem(`quiz_${questionId}`, isCorrect);
}

// クエリ文字列からquestionidを取得する関数
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// ページ読み込み時にクイズの状態をチェックする関数
function checkQuizStatus() {
    const questionId = getQueryParameter('questionid');
    if (questionId && questionMapping[questionId]) {
        const questionNumber = questionMapping[questionId];
        const isCorrect = localStorage.getItem(`quiz_${questionId}`);
        if (isCorrect === 'true') {
            const questionCard = document.getElementById(`question${questionNumber}`);
            if (questionCard) {
                const img = questionCard.querySelector('.card-img-top');
                if (img) {
                    img.src = 'img/complete.png';
                }
                const button = questionCard.querySelector('a');
                if (button) {
                    button.classList.add('disabled');
                }
            }
        }
    }
}

// ページ読み込み時にクイズの状態をチェック
document.addEventListener('DOMContentLoaded', checkQuizStatus);