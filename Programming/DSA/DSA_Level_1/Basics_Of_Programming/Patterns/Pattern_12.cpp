#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter N : ";
    cin >> n;
    int a = 0, b = 1;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << a <<" ";
            int count = a + b;
            a = b;
            b = count;
        }

        cout << endl;
    }
}