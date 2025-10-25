public class Employee {
    int employeeId;
    String name;
    double salary;

    public Employee(int employeeId, String name, double salary) {
        this.employeeId = employeeId;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("--- Employee Details ---");
        System.out.println("ID: " + this.employeeId);
        System.out.println("Name: " + this.name);
        System.out.println("Salary: " + this.salary);
        System.out.println("------------------------");
    }
}