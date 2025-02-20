package method;

public class MethodEx3Ref {

    public static void main(String[] args) {
        int balance = 10000;
        int depositeMoney = 1000;
        int withdrawMoney = 2000;
        balance = depositAmount(balance, depositeMoney);
        System.out.println(depositeMoney + "원을 입금하셨습니다. 현재 잔액: " + balance);
        balance = withdrawAmount(balance, withdrawMoney);
        System.out.println("최종잔액: " + balance + "원");
    }

    public static int depositAmount(int balance, int money) {
        return balance + money;
    }

    public static int withdrawAmount(int balance, int money) {
         if (balance < money) {
             System.out.println(money + "원을 출금하려고 했으나 잔액이 부족합니다.");
         } else {
             balance -= money;
             System.out.println(money + "원을 출금하였습니다. 현재 잔액: " + balance);
         }
         return balance;
    }
}
