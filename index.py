def quotientstring(x,y):
    quotient = x / y
    reminder = x % y
    # return ("The quotient of {} and {} is {}, and the reminder is {}.".format(x,y,quotient, reminder), sep="")
    return ("The quotient of ", x," and ", y, " is ",quotient, " and the reminder is ", reminder)


def main():
    x = int(input("Enter a number X:__"))
    y = int(input("Enter another number Y:__"))

main()


items = ['orange', 'mango', 'cashew', 'guava']
number = 1

for item in items:
    print(number + 1, item)