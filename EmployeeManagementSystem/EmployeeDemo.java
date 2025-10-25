import java.util.Scanner;

public class EmployeeDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter details for Employee 1:");
        System.out.print("Enter ID: ");
        int id1 = scanner.nextInt();
        scanner.nextLine(); 
        System.out.print("Enter Name: ");
        String name1 = scanner.nextLine();
        System.out.print("Enter Salary: ");
        double salary1 = scanner.nextDouble();
        
        Employee emp1 = new Employee(id1, name1, salary1);

        System.out.println("\nEnter details for Employee 2:");
        System.out.print("Enter ID: ");
        int id2 = scanner.nextInt();
        scanner.nextLine(); 
        System.out.print("Enter Name: ");
        String name2 = scanner.nextLine();
        System.out.print("Enter Salary: ");
        double salary2 = scanner.nextDouble();

        Employee emp2 = new Employee(id2, name2, salary2);

        System.out.println("\nDisplaying Employee Data:");
        emp1.displayDetails();
        emp2.displayDetails();

        scanner.close();
    }
}  