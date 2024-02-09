// רשימה של המערכות
const jsonData = {
    "aspects": [
        {
            "id": 1,

            "pic": "Engagement.png",

            "title": "מעורבות",

            "abstract": "משחקי למידה נועדו למשוך את תשומת הלב של הלומד, להפוך...",

            "fullContent": "משחקי למידה נועדו למשוך את תשומת הלב של הלומד, להפוך את תהליך הלמידה למהנה וסוחף יותר.",

            "category": "אינטראקטיביות"

        },

        {

            "id": 2,

            "pic": "Interactivity.png",

            "title": "אינטראקטיבי",

            "abstract": "משחקים מעודדים השתתפות פעילה, המאפשרים ללומדים...",

            "fullContent": "משחקים מעודדים השתתפות פעילה, המאפשרים ללומדים לקיים אינטראקציה עם התוכן, לקבל החלטות ולחוות את ההשלכות של מעשיהם.",

            "category": "אינטראקטיביות"

        },

        {

            "id": 3,

            "pic": "Feedback.png",

            "title": "משובים",

            "abstract": "משוב מיידי הוא חיוני במשחקי למידה. זה עוזר ללומדים להבין...",

            "fullContent": "משוב מיידי הוא חיוני במשחקי למידה. זה עוזר ללומדים להבין את תוצאות הבחירות שלהם ומחזק את מטרות הלמידה. ",

            "category": "תהליך"

        },

        {

            "id": 4,

            "pic": "Adaptability.png",

            "title": "התאמה לרמת הלומד",

            "abstract": "ניתן להתאים משחקים לרמות מיומנות שונות, בהתאמה להת...",

            "fullContent": "ניתן להתאים משחקים לרמות מיומנות שונות, בהתאמה להתקדמות הלומד. זה מבטיח שהתוכן יישאר מאתגר אך ניתן להתמודדות. ",

            "category": "תהליך"

        },

        {

            "id": 5,

            "pic": "RealWorld.png",

            "title": "יישום בעולם האמיתי",

            "abstract": "משחקי הדרכה מדמים לרוב תרחישים מהעולם האמיתי, ו...",

            "fullContent": "משחקי הדרכה מדמים לרוב תרחישים מהעולם האמיתי, ומאפשרים ללומדים ליישם ידע תיאורטי במצבים מעשיים.",

            "category": "יישום"

        },

        {

            "id": 6,

            "pic": "Collaboration.png",

            "title": "שיתוף פעולה",

            "abstract": "משחקי למידה רבים מקדמים שיתוף פעולה ועבודת צוות, מטפחים אי...",

            "fullContent": "משחקי למידה רבים מקדמים שיתוף פעולה ועבודת צוות, מטפחים אינטראקציה חברתית ומיומנויות תקשורת בין הלומדים.",

            "category": "רב משתתפים"

        },

        {

            "id": 7,

            "pic": "Competition.png",

            "title": "תחרותיות",

            "abstract": "שילוב אלמנט תחרותי יכול להניע את הלומדים לשאוף לשיפור, ול...",

            "fullContent": "שילוב אלמנט תחרותי יכול להניע את הלומדים לשאוף לשיפור, ולהגביר את המעורבות והמחויבות שלהם לתהליך הלמידה.",

            "category": "רב משתתפים"

        },

        {

            "id": 8,

            "pic": "Problem.png",

            "title": "פיתרון בעיות",

            "abstract": "משחקים לרוב מציגים אתגרים או בעיות הדורשים חשיבה ביקורתית...",

            "fullContent": "משחקים לרוב מציגים אתגרים או בעיות הדורשים חשיבה ביקורתית וכישורי פתרון בעיות, ומעודדים את הלומדים לחשוב בצורה אנליטית.",

            "category": "יישום"

        },

        {

            "id": 9,

            "pic": "Multimodal.jpg",

            "title": "למידה רב-מודאלית",

            "abstract": "משחקי למידה ממנפים צורות שונות של מדיה, כגון שימוש בויזואליזצ...",

            "fullContent": "משחקי למידה ממנפים צורות שונות של מדיה, כגון שימוש בויזואליזציה, אודיו וטקסט, כדי להתאים לסגנונות למידה והעדפות שונות.",

            "category": "יישום"

        },

        {

            "id": 10,

            "pic": "Progress.png",

            "title": "מעקב אחר התהליך",

            "abstract": "משחקים כוללים בדרך כלל מנגנונים למעקב אחר התקדמו...",

            "fullContent": "משחקים כוללים בדרך כלל מנגנונים למעקב אחר התקדמות אינדיבידואלית. הלומדים יכולים לעקוב אחר הישגיהם, מה שיכול לשמש מקור מוטיבציה ובסיס לשיפור.",

            "category": "תהליך"

        }

    ]
}

// מערך של מזהים למעקב אחר הפריטים המוצגים בעמוד
// משמש אותנו במקרה של סינון במעבר בין הכרטיסיות במודל
let visibleItemsIds = [];

//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
    // קריאה לפונקציה שתיצור את הרשימה אחרי עליית העמוד
    createItems()
});

// פונקציה ליצירת הכרטיסיות
function createItems() {
    const itemsContainer = document.getElementById('itemsContainer');

    // מעבר על הרשימה מעלה והוספה של פריט לרשימה בדף בכל סיבוב
    jsonData.aspects.forEach(aspect => {
        //  יצירה של תגית הפריט והוספת המזהה ומחלקת הבוטסטראפ המתאימה
        const card = document.createElement("div");
        card.setAttribute("id", `aspect_${aspect.id}`);
        card.classList.add("card");

        // הוספת המזהה הנוכחי למאפיין בעת יצירת כל הכרטיסיות
        visibleItemsIds.push(aspect.id);

        // יצירת תגיות מתאימות על פי המבנה של בוטסטראפ והוספת המחלקות הרלוונטיות
        const aspectImage = document.createElement('img');
        aspectImage.src = `images/${aspect.pic}`;
        aspectImage.classList.add("card-img-top");

        const cardBody = document.createElement('div');
        cardBody.classList.add("card-body");

        const aspectTitle = document.createElement('h5');
        const aspectAbstract = document.createElement('p');
        const cardButton = document.createElement('button');
        aspectTitle.classList.add("card-title");
        aspectAbstract.classList.add("card-text");
        cardButton.classList.add("btn", "btn-link");

        // הכנסת התוכן לכל תגית
        aspectTitle.innerHTML = `${aspect.title}`;
        aspectAbstract.innerHTML = `${aspect.abstract}`;
        cardButton.innerHTML = "להמשך קריאה >";

        // השתלת התגיות
        card.appendChild(aspectImage);
        cardBody.appendChild(aspectTitle);
        cardBody.appendChild(aspectAbstract);
        cardBody.appendChild(cardButton);
        card.appendChild(cardBody);

        // השתלת הכרטיסייה המוכנה
        itemsContainer.appendChild(card);

        // הוספת אירוע לחיצה לכפתור, שולח את המזהה של המאפיין הנוכחי
        cardButton.addEventListener("click", () => clickTopic(aspect.id))
    });
}

// משתנה גלובלי לשמירת המזהה של המאפיין הנוכחי
let currentId;

// פונקצייה לעדכון התוכן שבתוך המודל
function changeModalContent(id) {
    currentId = id; //שמירת המזהה במשתנה הגלובלי
    // מציאת התוכן של המאפיין לפי המזהה שהתקבל
    const title = jsonData.aspects.find(g => g.id == id).title;
    const content = jsonData.aspects.find(g => g.id == id).fullContent;

    // הכנסת התוכן לתגיות בדף
    document.querySelector("h5.modal-title").innerHTML = title;
    document.querySelector(".modal-body p").innerHTML = content;

}

// פונקציית לחיצה על כפתור "להמשך קריאה" שמקבלת כפרמטר את המזהה של המאפיין
function clickTopic(id) {
    // קריאה לפונקציה לשינוי תוכן המודל ושליחת המזהה
    changeModalContent(id);
    // הצגת המודל על המסך
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}

//פונקציית לחיצה על כפתור הקודם בפופאפ
function showPrevious() {
    // שמירת האינדקס של הפריט הנוכחי במערך המזהים הגלויים
    const currentIndex = visibleItemsIds.indexOf(currentId);

    // מציאת הפריט הקודם
    // אם היינו בתחילת הרשימה, נחזור לפריט האחרון
    let newIndex;
    if (currentIndex > 0) {
        newIndex = currentIndex - 1;
    }
    else {
        newIndex = visibleItemsIds.length - 1;
    }
    currentId = visibleItemsIds[newIndex];

    // קריאה לפונקציה לשינוי תוכן המודל ושליחת המזהה המעודכן
    changeModalContent(currentId);

}


//פונקציית לחיצה על כפתור הבא בפופאפ
function showNext() {
    // שמירת האינדקס של הפריט הנוכחי במערך המזהים הגלויים 
    const currentIndex = visibleItemsIds.indexOf(currentId);

    // מציאת הפריט הבא
    // אם היינו בסוף הרשימה, נחזור לפריט הראשון
    let newIndex;
    if (currentIndex < visibleItemsIds.length - 1) {
        newIndex = currentIndex + 1;
    }
    else {
        newIndex = 0;
    }
    currentId = visibleItemsIds[newIndex];

    // קריאה לפונקציה לשינוי תוכן המודל ושליחת המזהה המעודכן
    changeModalContent(currentId);
}

// פונקציית לחיצה על כפתור החיפוש
function searchCategory() {

    visibleItemsIds.length = 0;
    // שמירת הערך שהוזן בתיבת החיפוש
    const searchValue = document.querySelector("#searchbox").value;
    // משתנה לבדיקה האם נמצאו תוצאות
    let isResultFound = false;
    // לולאה למעבר על רשימת המאפיין
    jsonData.aspects.forEach(aspect => {
        // איתור הכרטיסייה הנוכחית של המאפיין לפי המזהה
        const currentCard = document.getElementById(`aspect_${aspect.id}`);
        // אם הערך שהוזן שווה לקטגוריה של הכרטיסיה הנוכחית, או לחלופין ריק, תבטל את ההסתרה שלה
        if (searchValue == aspect.category || searchValue == "") {
            currentCard.classList.remove("hide");
            visibleItemsIds.push(aspect.id);
            isResultFound = true; // שינוי ערך הבוליאני לנכון
        }
        // אחרת תסתיר אותה
        else {
            currentCard.classList.add("hide");

        }
    })
    // איתור האלמנט להצגת ההודעה
    const msgNotFound = document.querySelector('#itemsContainer p');
    // אם יש תוצאות, הסתר את האלמנט. אחרת תבטל את ההסתרה
    if (isResultFound) {
        msgNotFound.classList.add("hide");
    } else {
        msgNotFound.classList.remove("hide");
    }
}

// פונקציה להצגת/הסתרת תפריט הניווט במובייל
function toggleNav() {
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}
