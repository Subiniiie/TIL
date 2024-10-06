package cond;

public class If5 {

    public static void main(String[] args) {
        int price = 13000;
        int age = 14;
        int discount = 0;


        if (price >= 10000) {
            discount += 1000;
            System.out.println("10,000원 이상 구매, 1,000 할인");
        }

        if (age <= 10) {
            discount += 1000;
            System.out.println("어린이 1,000원 할인");
        }

        System.out.println("총 할인 금액 : " + discount);

        // 한 줄이면 중괄호({}) 생략 가능 but 권장하지 않음
        if (true) System.out.println("if문에서 실행됨");
    }
}
