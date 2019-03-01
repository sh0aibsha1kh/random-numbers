import random
import sys


def random_numbers(n):
    zero = 0
    one = 0
    two = 0
    three = 0
    four = 0
    five = 0
    six = 0
    seven = 0
    eight = 0
    nine = 0
    i = 0
    while i < n:
        r = random.randint(0, 9)
        if r == 0:
            zero += 1
        elif r == 1:
            one += 1
        elif r == 2:
            two += 1
        elif r == 3:
            three += 1
        elif r == 4:
            four += 1
        elif r == 5:
            five += 1
        elif r == 6:
            six += 1
        elif r == 7:
            seven += 1
        elif r == 8:
            eight += 1
        elif r == 9:
            nine += 1
        i += 1
    return zero, one, two, three, four, five, six, seven, eight, nine


if __name__ == "__main__":
    if len(sys.argv) == 1:
        r = random_numbers(10)
    else:
        r = random_numbers(int(sys.argv[1]))
    print("0: " + str(r[0]) +
          "\n1: " + str(r[1]) +
          "\n2: " + str(r[2]) +
          "\n3: " + str(r[3]) +
          "\n4: " + str(r[4]) +
          "\n5: " + str(r[5]) +
          "\n6: " + str(r[6]) +
          "\n7: " + str(r[7]) +
          "\n8: " + str(r[8]) +
          "\n9: " + str(r[9]))
