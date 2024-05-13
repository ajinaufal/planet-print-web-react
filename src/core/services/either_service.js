export class EitherService {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    static left(value) {
        return new EitherService(value, null);
    }

    static right(value) {
        return new EitherService(null, value);
    }

    match({ left, right }) {
        return this.right ? right(this.right) : left(this.left);
    }

    fold(leftFn, rightFn) {
        if (this.left !== null) {
            return leftFn(this.left);
        } else if (this.right !== null) {
            return rightFn(this.right);
        }
    }
}
