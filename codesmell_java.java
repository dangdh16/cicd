import java.util.ArrayList;

public class ExampleClass {

    private int exampleVariable;
    private ArrayList<String> exampleList;

    public ExampleClass() {
        this.exampleVariable = 0;
        this.exampleList = new ArrayList<String>();
    }

    public void setExampleVariable(int exampleVariable) {
        this.exampleVariable = exampleVariable;
    }

    public int getExampleVariable() {
        return this.exampleVariable;
    }

    public void addExampleToList(String exampleString) {
        this.exampleList.add(exampleString);
    }

    public ArrayList<String> getExampleList() {
        return this.exampleList;
    }

    public static void main(String[] args) {

        ExampleClass exampleObject = new ExampleClass();

        // This loop is an example of a code smell - long method
        for (int i = 0; i < 100; i++) {
            exampleObject.setExampleVariable(i);
            if (i % 2 == 0) {
                exampleObject.addExampleToList("even");
            } else {
                exampleObject.addExampleToList("odd");
            }
        }

        // This block is an example of a code smell - duplicate code
        for (int i = 0; i < exampleObject.get
