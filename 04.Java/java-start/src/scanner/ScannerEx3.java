package scanner;

import java.util.Scanner;

public class ScannerEx3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("음식 이름을 입력해주세요 : ");
        String name = scanner.nextLine();

        System.out.print("음식의 가격을 입력해주세요  : ");
        int price = scanner.nextInt();

        System.out.print("음식의 수량을 입력해주세요 : ");
        int quantity = scanner.nextInt();

        int totalPrice = price * quantity;

        System.out.println(name + " " + quantity + "개를 주문하셨습니다. 총 가격은 " + totalPrice + "원입니다.");
    }
}
