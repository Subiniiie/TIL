package cond.ex;

public class DistanceEx {

    public static void main(String[] args) {
        int distance = 25;
        String transfortation;

        if (distance <= 1) {
            transfortation = "도보";
        } else if (distance <= 10) {
            transfortation = "자전거";
        } else if (distance <= 100) {
            transfortation = "자동차";
        } else {
            transfortation = "비행기";
        }

        System.out.println(transfortation + "를 이용하세요.");
    }
}
