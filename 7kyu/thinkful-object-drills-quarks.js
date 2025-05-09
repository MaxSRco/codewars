// BACKGROUND
// You're modelling the interaction between a large number of quarks and have decided to create a Quark class,
// so you can generate your own quark objects. Quarks are fundamental particles and the only fundamental particle to experience all four fundamental forces.
//
// YOUR TASK
// Your Quark class should allow you to create quarks of any valid color ("red", "blue", and "green")
// and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').
//
// Every quark has the same baryon_number (BaryonNumber in C#): 1/3.
//
// Every quark should have an .interact() (.Interact() in C#) method that allows any quark to interact with another quark via the strong force.
// When two quarks interact they exchange colors.

// Example
// >>> q1 = Quark("red", "up")
// >>> q1.color
// "red"
// >>> q1.flavor
// "up"
// >>> q2 = Quark("blue", "strange")
// >>> q2.color
// "blue"
// >>> q2.baryon_number
// 0.3333333333333333
// >>> q1.interact(q2)
// >>> q1.color
// "blue"
// >>> q2.color
// "red"

class Quark {
    constructor (color, flavor) {
        this.color = color;
        this.flavor = flavor;
    }

    baryon_number = 1/3;

    interact(quark) {
        [this.color, quark.color] = [quark.color, this.color];
        return `${this.color} ${quark.color}`;
    }
}

q1 = new Quark("red", "up");
q2 = new Quark("blue", "strange");
console.log(q1.interact(q2));
console.log(q1.flavor);
console.log(q1.baryon_number);
q1.color = "green";
q2.color = "red";
console.log(q1.interact(q2));
