const defaultCode = String.raw`#include <bits/stdc++.h>

using namespace std;
#define cin cpp_comparator_variable_for_input
#define cout cpp_comparator_variable_for_output

// required function
string myInputGen();
void function1();
void function2();

//global variables
stringstream cpp_comparator_variable_for_input;
stringstream cpp_comparator_variable_for_output;
string cpp_comparator_variable_for_to_store_current_input;

void initInput()
{
    cpp_comparator_variable_for_to_store_current_input = myInputGen();
}
void setInput(){
    cpp_comparator_variable_for_input.clear();   
    cpp_comparator_variable_for_input << cpp_comparator_variable_for_to_store_current_input;
}
string getOutput()
{
    string output = cpp_comparator_variable_for_output.str();
    return output;
}
void flushOutput(){
    //flush cout
    cpp_comparator_variable_for_output.str("");
}


int main()
{
    srand(time(NULL));
    string op1, op2;
    int i = 0;
    do
    {
        i++;
        //initialize once
        initInput();

        //flush output, set input and call function
        flushOutput();
        setInput();
        function1();
        op1 = getOutput();

        flushOutput();
        setInput();
        function2();
        op2 = getOutput();
    } while (op1 == op2 && i <= REPLACE_ME_WITH_A_CONSTANT_VALUE);

    if (op1 != op2)
    {
        printf("%s|%s|%s", cpp_comparator_variable_for_to_store_current_input.c_str(), op1.c_str(), op2.c_str());
    }else{
        printf("No mismatch found with %d trials!", REPLACE_ME_WITH_A_CONSTANT_VALUE);
    }
}

// string myInputGen()
// {
//     return "your input";
// }
// void function1(){
//     /*****Instructions**********
//      * All inputs should be read using cin (dont use scanf)
//      * Code must output using cout (dont use printf)
//      * If there are other functions, place them above this function
//     */
//    cout<<"Output from function1"<<endl;
// }
// void function2(){
//     /*****Instructions**********
//      * All inputs should be read using cin (dont use scanf)
//      * Code must output using cout (dont use printf)
//      * If there are other functions, place them above this function
//     */
//    cout<<"Output from function2"<<endl;
// }
`;
export default defaultCode;