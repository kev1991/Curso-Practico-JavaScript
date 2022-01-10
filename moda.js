const list_1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const list_count_1 = {};

list_1.map(
    function (element) {
        if (list_count_1[element]) {
            list_count_1[element] += 1;
        }else{
            list_count_1[element]  = 1;
        }
    }
);

const list_array_1 = Object.entries(list_count_1).sort(
    function (accumulated_value, new_value) {
        return accumulated_value[1] - new_value[1]
    }
);
const moda = list_array_1[list_array_1.length - 1];




