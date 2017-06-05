function quickSort (arr, p, r) {
    if(p < r) {
        let q = partition(arr, p, r)
        quickSort(arr, p, q-1)
        quickSort(arr, q+1, r)
    }
    return arr
}

function swap (arr, a, b) {
    const tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
}

// partition function
function partition (arr, p, r) {
    // taking arr[r] as the pivot val
    // taking q as the pivot's final idx
    let q = p
    for (let j=p; j<r ;j++) {
        if (arr[j] <= arr[r]) {
            swap(arr, j, q)
            q++
        }
    }
    swap(array, r, q)
    return q
}
