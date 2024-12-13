package loop;

public class WhileEx2 {
    public static void main(String[] args) {
        int count = 1;
        int num = 0;
        while (count <= 20) {
            if (count % 2 == 0) {
                System.out.println(count);
                num += 1;
            }
            count += 1;
        }
    }
}
