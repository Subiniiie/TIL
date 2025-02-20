package method;

public class MethodCasting1 {

    public static void main(String[] args) {
        double number = 1.5;
//        printNumber(number);   double 값을 더 작은 int에 넣을 수 없음
        // 명시적 형변환
        printNumber((int)number);
    }

    public static void printNumber(int n) {
        System.out.println("숫자 : " + n);
    }
}
