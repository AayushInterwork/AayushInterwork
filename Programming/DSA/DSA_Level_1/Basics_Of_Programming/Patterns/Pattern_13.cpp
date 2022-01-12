#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter N : ";
    cin >> n;
    for (int i = 0; i < n; i++)
    {
    int icj = 1;
        for (int j = 0; j <= i; j++)
        {
            cout<<icj<<" ";
            int icjp1 = (icj * (i-j))/(j+1);
            icj = icjp1;
        }
        cout << endl;
    }
}