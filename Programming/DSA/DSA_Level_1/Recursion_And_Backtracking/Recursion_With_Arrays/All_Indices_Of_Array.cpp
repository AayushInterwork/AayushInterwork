#include <iostream>
using namespace std;

int *allIndices(int arr[], int idx, int x, int n, int fsf)
{
    // write your code here
    if (idx == n)
    {
        int arr2[fsf];
        return arr2;
    }
    int iarr[fsf];
    if (arr[idx] == x)
    {
        iarr = allIndices(arr, idx + 1, x, n, fsf + 1);
        iarr[fsf] = idx;
    }
    else
    {
        iarr = allIndices(arr, idx + 1, x, n, fsf);
    }
}

int main()
{
    int n;
    cin >> n;
    int d;
    int arr[n];
    for (int i = 0; i < n; i++)
        cin >> arr[i];
    cin >> d;
    int *arr2 = allIndices(arr, 0, d, n, 0);
    // int fsf = allIndices;
    for (int i = 0; i < 10; i++)
    {
        cout << arr2[i] << endl;
    }
    // cout << p << endl;
}