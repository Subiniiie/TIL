package prac;

public class EvenOddEx {
    public static void main(String[] args) {
        int x = 31;

        String result = (x % 2) == 0 ? "짝수" : "홀수";
        System.out.println("x = " + x + ", " + result + "입니다.");
    }
}
