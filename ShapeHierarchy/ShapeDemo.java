public class ShapeDemo {
    public static void main(String[] args) {
        Shape[] shapes = new Shape[3];

        shapes[0] = new Circle(5.0);
        shapes[1] = new Rectangle(4.0, 6.0);
        shapes[2] = new Circle(7.5);

        for (Shape shape : shapes) {
            if (shape instanceof Circle) {
                System.out.print("Area of Circle: ");
            } else if (shape instanceof Rectangle) {
                System.out.print("Area of Rectangle: ");
            }
            
            System.out.println(shape.calculateArea());
        }
    }
}