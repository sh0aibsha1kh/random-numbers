import java.util.concurrent.ThreadLocalRandom;

class RandomNumbers {

    private static int[] randomNumbers(int n) {
        int numbers[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
        int i = 0;
        while (i < n) {
            int r = ThreadLocalRandom.current().nextInt(10);
            numbers[r] += 1;
            i += 1;
        }
        return numbers;
    }

    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        int r[];
        if (args.length == 0) {
            r = randomNumbers(10);
        } else {
            r = randomNumbers(Integer.parseInt(args[0]));
        }
        System.out.print("0: " + r[0] + "\n1: " + r[1] + "\n2: " + r[2] + "\n3: " + r[3] + "\n4: " + r[4] + "\n5: "
                + r[5] + "\n6: " + r[6] + "\n7: " + r[7] + "\n8: " + r[8] + "\n9: " + r[9] + "\n");
        System.out.printf("Executed in " + ((System.currentTimeMillis() - start)) + " milliseconds.\n");
    }
}