import java.util.Scanner;

public class BankDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000.00);
        System.out.println("Initial balance: " + account.getBalance());

        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter amount to withdraw: ");
        double amountToWithdraw = scanner.nextDouble();

        try {
            account.withdraw(amountToWithdraw);
            System.out.println("Withdrawal successful.");
        } catch (InsufficientFundsException e) {
            System.out.println("--- Transaction Failed ---");
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("--------------------------");
            System.out.println("Current balance: " + account.getBalance());
        }

        scanner.close();
    }
}