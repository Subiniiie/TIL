package array;

import java.util.Scanner;

public class ArrayEx2 {
    public static void main(String[] args) {
        int[] numbers = new int[5];

        Scanner input = new Scanner(System.in);
        System.out.println("5개의 정수를 입력하세요 : ");

        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = input.nextInt();
        }

        System.out.println("츨력");
        for (int i = 0; i < numbers.length; i++) {
            if (i < numbers.length - 1) {
                System.out.print(numbers[i] + ", ");
            } else {
                System.out.print(numbers[i]);
            }
        }
    }
}
