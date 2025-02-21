package prac;

public class ScoreEx {

    public static void main(String[] args) {
        int score = 97;

        String result;
        if (score >= 90) {
            result = "A";
        } else if (score >= 80) {
            result = "B";
        } else if (score >= 70) {
            result = "C";
        } else if (score >= 60) {
            result = "D";
        } else {
            result = "F";
        }
        System.out.println("학점은 " + result + "입니다.");
    }
}
