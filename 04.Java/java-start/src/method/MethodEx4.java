package method;

import java.util.Scanner;

public class MethodEx4 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int balance = 0;

        while (true) {
            System.out.println("----------");
            System.out.println("1. 입금 | 2. 출금 | 3. 잔액 확인 | 4. 종료");
            System.out.println("----------");
            System.out.print("선택 : ");
            int menuChoice = scanner.nextInt();

            if (menuChoice == 1) {
                System.out.print("입금액을 입력하세요 : ");
                int depositeMoney = scanner.nextInt();
                balance = deposite(balance, depositeMoney);
            } else if (menuChoice == 2) {
                System.out.print("출금액을 입력하세요 : ");
                int withdrawMoney = scanner.nextInt();
                balance = overdraw(balance, withdrawMoney);
            } else if (menuChoice == 3) {
                System.out.println("현재 잔액 : " + balance);
            } else {
                System.out.println("시스템을 종료합니다");
                break;
            }
        }
    }

    public static int deposite(int balance, int price) {
        balance += price;
        System.out.println(price + "원을 입금하였습니다. 현재 잔액 : " + balance + "원");
        return balance;
    }

    public static int overdraw(int balance, int price) {
        if (balance >= price) {
            balance -= price;
            System.out.println(price + "원을 출금하였습니다. 현재 잔액 : " + balance + "원");
        } else {
            System.out.println(price + "원을 출금하려 했으나 잔액이 부족합니다.");
        }
        return balance;
    }
}
