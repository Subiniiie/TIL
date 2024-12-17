package array;

import java.util.Scanner;

public class ArrayEx7 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int maxProduct = 10;

        String[] productNames = new String[maxProduct];
        int[] productPrices = new int[maxProduct];

        int productCount = 0;

        System.out.println("1. 상품 등록, 2: 상품 목록, 3. 종료");

        while (true) {
            System.out.print("메뉴를 선택하세요 : ");
            int selectedMenu = input.nextInt();
            input.nextLine();

            if (selectedMenu == 1) {
                if (productCount == maxProduct - 1) {
                    System.out.println("더 이상 상품을 추가할 수 없습니다.");
                } else {
                    System.out.print("상품 이름을 입력하세요 : ");
                    productNames[productCount] = input.nextLine();
                    System.out.print("상품 가격을 입력하세요 : ");
                    productPrices[productCount] = input.nextInt();
                    productCount++;
                }
            } else if (selectedMenu == 2) {
                for (int i = 0; i < productCount; i++) {
                    System.out.println(productNames[i] + " : " + productPrices[i]);
                }
            } else {
                System.out.println("프로그램을 종료합니다.");
                break;
            }
        }
    }
}
