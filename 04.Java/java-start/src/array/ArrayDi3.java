package array;

public class ArrayDi3 {
    public static void main(String[] args) {
        // 2차원 배열을 만든다
        int[][] arr = new int[2][3];   // 행2, 열3

        int i = 1;

        for (int row = 0; row < arr.length; row++) {
             for (int column = 0; column < arr[row].length; column++) {
                // i값을 넣고 나서 i에 1 증가
                 arr[row][column] = i++;

            }
            System.out.println();
        }
    }
}
