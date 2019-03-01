import random
import sys


def random_numbers(n):
    numbers = [0] * 10
    i = 0
    while i < n:
        r = random.randint(0, 9)
        numbers[r] += 1
        i += 1
    return numbers


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
