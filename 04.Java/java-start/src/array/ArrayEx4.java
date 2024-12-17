package array;

import java.util.Scanner;

public class ArrayEx4 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("입력받을 숫자의 개수를 입력하세요 : ");
        int count = input.nextInt();

        int[] numbers = new int[count];


        System.out.println(count + "개의 정수를 입력하세요");
        for (int i = 0; i < count; i++) {
            numbers[i] = input.nextInt();
        }

        int total = 0;

        for (int i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }

        double average = (double) total / numbers.length;

        System.out.println("입력한 정수의 합계 : " + total);
        System.out.println("입력한 정수의 평균 : " + average);
    }
}
