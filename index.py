# def quotientstring(x,y):
#     quotient = x / y
#     reminder = x % y
#     # return ("The quotient of {} and {} is {}, and the reminder is {}.".format(x,y,quotient, reminder), sep="")
#     return ("The quotient of ", x," and ", y, " is ",quotient, " and the reminder is ", reminder)


# # def main():
# #     x = int(input("Enter a number X:__"))
# #     y = int(input("Enter another number Y:__"))

# # main()
# print(quotientstring(25, 5))


def quotientprob(x, y):
    quotient = x//y
    remainder = x % y
    print('The quotient of ', x, ' and ', y, ' is ', quotient, ' with a remainder of ', remainder, '.', sep='')


def main():
    x = int(input('Enter an number: '))
    y = int(input('Enter another number: '))
    quotientprob(x, y)
    

main()