// function findPeakElement(nums) {
//     let peakElement = nums[0];
//     let index = 0;
//     for (let i = 1; i < nums.length - 1; i++) {
//         if ((nums[i] > peakElement) && (nums[i] > nums[i+1])) {
//             peakElement = nums[i];
//             index = i;
//         } else {
//             index = nums.at(-1) > peakElement ? nums.length -1 : index;
//         }
//     }
//     return index;
// }

// console.log(findPeakElement([2,4,6,7,9]));

function getDrinkByProfession(param) {
    param.toLowerCase();
    switch (param) {
        case "Jabroni":
            console.log("Patron Tequila");
            break;
        case "School Counselor":
            console.log("Anything with Alcohol");
            break;
        case "Programmer":
            console.log("Hipster Craft Beer");
            break;
        case "Bike Gang Member":
            console.log("Moonshine");
            break;
        case "Politician":
            console.log("Your tax dollars");
            break;
        case "Rapper":
            console.log("Cristal");
            break;
        default:
            console.log("Beer");
            break;
    }
}

getDrinkByProfession('Politician');
