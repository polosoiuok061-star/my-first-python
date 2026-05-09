print("--- โปรแกรมคำนวณเลขมงคล ---")
num1 = float(input("ใส่ตัวเลขแรก: "))
num2 = float(input("ใส่ตัวเลขที่สอง: "))

sum_result = num1 + num2
multiply_result = num1 * num2

print(f"ผลบวกของ {num1} + {num2} คือ: {sum_result}")
print(f"ผลคูณของ {num1} x {num2} คือ: {multiply_result}")

if sum_result > 100:
    print("โห! เลขบวกกันได้เยอะมาก คอม R5 7500F คำนวณสบายๆ")
else:
    print("เลขกำลังดีเลยครับ เหมาะกับการเริ่มต้นเรียนเขียนโค้ด!")
