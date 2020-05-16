let div = document.getElementById("text");

const letters =["a","b","c"];

setTimeout(
    () =>
        letters.forEach((letter, i) => {
            setTimeout(() => {
                div.innerHTML += letter;
            }, i*500);
        }),
        2800
);