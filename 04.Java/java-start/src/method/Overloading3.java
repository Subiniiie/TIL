package method;

public class Overloading3 {

    public static void main(String[] args) {
        System.out.println("1: " + add(1, 2));
        System.out.println("2: " + add(1.5, 1.8));
    }

    // 만약 이 코드를 주석처리하면
    // int는 double보다 범위가 작으므로
    // add(1, 2)는 add(double a, double b)에 들어감
//    public static int add(int a, int b) {
//        System.out.println("1번 호출");
//        return a + b;
//    }

    public static double add(double a, double b) {
        System.out.println("2번 호출");
        return a + b;
    }
}
