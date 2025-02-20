package method;

public class MethodEx3 {

    public static void main(String[] args) {
        int balance = 10000;

        // 입금 1000
        int depositAmount = 1000;
        balance += depositAmount;
        System.out.println(depositAmount + "원을 입급하셨습니다. 현재 잔액: " + balance + "원");

        // 출금
        int withdrawAmount = 2000;
        if (balance >= withdrawAmount) {
            balance -= withdrawAmount;
            System.out.println(withdrawAmount + "원을 출금하였습니다. 현재 잔액: " + balance + "원");
        } else {
            System.out.println(withdrawAmount + "원을 출금하려고 했으나 잔액이 부족합니다");
        }
        System.out.println("최종 잔액 : " + balance + "원");
    }
}
