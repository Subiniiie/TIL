package method;

public class MethodEx1Ref {

    public static void main(String[] args) {
        add(1, 2, 3);
        add(15, 25, 35);
    }

    public static int add(int a, int b, int c) {
        int sum = a + b + c;
        System.out.println("평균값 : " + average(sum));
        return sum;
    }

    public static double average(double sum) {
        return sum / 3.0;
    }
}
