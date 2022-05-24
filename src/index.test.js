const add = (a, b) => a + b;

const users = ['roman', 'fava', 'jozef', 'basia'];

it('Adds two values', () => {
    expect(add(2, 4)).toBe(7);
});

it('check list', () => {
    expect(users).toContain('roman');
    expect(users).not.toContain('bananas');
});
