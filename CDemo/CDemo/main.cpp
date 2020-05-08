//
//  main.cpp
//  CDemo
//
//  Created by 赵学煜 on 2019/1/17.
//  Copyright © 2019 赵学煜. All rights reserved.
//

#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

void sort(int A[], int n);

int main(int argc, const char * argv[]) {
    // insert code here...
    int A[7] = {5,2,7,4,6,3,1};
    sort(A, 7);
    for (int i=0; i<7; i++) {
        cout << A[i] << endl;
    }
    return 0;
}

void sort(int A[], int n) {
    bool sorted = false;
    while (!sorted) {
        sorted = true;
        for (int i=1; i<n; i++) {
            if (A[i-1] > A[i]) {
                swap(A[i-1], A[i]);
                sorted = false;
            }
        }
        n--;
    }
}
