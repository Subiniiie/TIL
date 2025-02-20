package method;

public class MethodEx2Ref {

    public static void main(String[] args) {
        printMessage("hello, world!", 3);
        printMessage("hello, world!", 5);
        printMessage("hello, world!", 7);
    }

    public static void printMessage(String message, int times) {
        for (int i = 0; i < times; i++) {
            System.out.println(message);
        }
    }
}
