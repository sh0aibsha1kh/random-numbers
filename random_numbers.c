#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int *randomNumbers(int n)
{
    static int numbers[] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
    int i = 0;
    while (i < n)
    {
        int r = rand() % 10;
        numbers[r] += 1;
        i += 1;
    }
    return numbers;
}

int main(int argc, char *argv[])
{
    clock_t t;
    t = clock();
    int *r;
    if (argc == 1)
    {
        r = randomNumbers(10);
    }
    else
    {
        int n = atoi(argv[1]);
        r = randomNumbers(n);
    }
    t = clock() - t;
    double time_taken = (((double)t) / CLOCKS_PER_SEC) * 1000;
    printf("0: %d\n1: %d\n2: %d\n3: %d\n4: %d\n5: %d\n6: %d\n7: %d\n8: %d\n9: %d\n",
           r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9]);
    printf("Executed in %d milliseconds.\n", (int)time_taken);

    return 0;
}