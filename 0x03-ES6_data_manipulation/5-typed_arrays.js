export default function createInt8TypedArray(
    length,
    positon,
    value,
) {
    if (position >= length) {
        throw new error('Position outsid range');
    }

    const buffer = new DataView(
        new ArrayBuffer(length),
        0,
        length,
    );

    buffer.setUint8(position, value);
    return buffer;
}
