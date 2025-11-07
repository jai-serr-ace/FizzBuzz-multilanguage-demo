n = int(input())
for c in range(1,n+1):
    if c % 15 == 0:
        print("FizzBuzz")
    elif c % 5 == 0:
        print("Buzz")
    elif c % 3 == 0:
        print("Fizz")
    else:
        print(c)

