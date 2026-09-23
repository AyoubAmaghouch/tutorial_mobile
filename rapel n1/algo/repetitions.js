let nombres = [4, 7, 2, 7, 9, 4, 5];
let repetition = [];

let k = 0;

for (let i = 0; i < nombres.length; i++) {

    for (let a = 0; a < nombres.length; a++) {

        if (nombres[i] == nombres[a] && i != a) {

            let existe = false;

            for (let b = 0; b < repetition.length; b++) {

                if (nombres[i] == repetition[b]) {
                    existe = true;
                }
            }

            if (existe == false) {
                repetition[k] = nombres[i];
                k++;
            }
        }
    }
}

