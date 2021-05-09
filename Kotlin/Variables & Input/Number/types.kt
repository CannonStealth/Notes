/*
Kotlin numbers fall into two categories: 
- integers
- decimals 

Long - Size: 64 Bytes | Min value: -9,223,372,036,854… | Max value: -9,223,372,036,854…
Int - Size: 32 Bytes | Min value: -2,147,483,648 | Max value: 2,147,483,647
Short - Size: 16 Bytes | Min value: -32,768 | Max value: 32,767
Byte - Size: 8 Bytes | Min value: -128 | Max value: 127

Double - Size: 64 Bytes | Decimals Digit Precision: 15-16
Float - Size: 32 Bytes | Decimals Digit Precision: 6-7
*/

fun main() {

    var doubleNum: Double = 6.0 / 13.0 
    var floatNum: Float = 6.0f / 13.0f
    println(doubleNum) // 0.46153846153846156
    println(floatNum)  // 0.46153846
}