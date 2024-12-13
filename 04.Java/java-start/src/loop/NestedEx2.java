package loop;

public class NestedEx2 {
    public static void main(String[] args) {
        int rows = 5;
        int i = 1;
        while (i <= rows) {
            for (int j = 1; j <= i; j++) {
                System.out.print('*');
            }
            System.out.println();
            i++;
        }
    }
}
