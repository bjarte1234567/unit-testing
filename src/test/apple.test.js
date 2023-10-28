import apple from "./apple";
describe ("My apple", () => {
    it ("is red and juicy", () => {
        expect(apple.color).toEqual("red");
        expect(apple.texture).toEqual("juicy");
    });

    it ("it is delicious", () => {
        expect(apple.rating).toBeGreaterThan(5);
    });
    it ("it is a vegan product", () => {
        expect(apple.animalProduct).not.toBeTruthy();
    });
});