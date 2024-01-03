//Solution 1
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let arr: number[] = []
    const totalLength: number = nums1.length + nums2.length;
    if (totalLength == 1) {
        return nums1.length == 1 ? nums1[0] : nums2[0];
    }

    let arr_len: number = totalLength % 2 == 0 ? (totalLength) / 2 + 1 : Math.ceil(totalLength / 2);

    let x: number = 0;
    let y: number = 0;

    while (arr.length < arr_len) {
        if (x < nums1.length && y < nums2.length) {
            if (nums1[x] <= nums2[y]) {
                arr.push(nums1[x]);
                x++;
            } else {
                arr.push(nums2[y]);
                y++;
            }
        } else if (x >= nums1.length) {
            arr.push(nums2[y]);
            y++;
        } else {
            arr.push(nums1[x]);
            x++;
        }
    }

    return totalLength % 2 == 0 ? (arr[arr.length - 1] + arr[arr.length - 2]) / 2 : arr[arr.length - 1];
};

//Solution 2
function findMedianSortedArraysTwo(nums1: number[], nums2: number[]): number {
    const arr: number[] = nums1.concat(nums2);
    arr.sort((a, b) => a - b);

    if (arr.length % 2 == 1) {
        const medianIndex = (arr.length + 1) / 2;
        return arr[medianIndex - 1]
    } else {
        const medianNumberOne = arr.length / 2;
        return (arr[medianNumberOne - 1] + arr[medianNumberOne]) / 2;
    }
};